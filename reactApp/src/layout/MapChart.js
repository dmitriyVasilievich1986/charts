import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import RoomIcon from '@material-ui/icons/Room';
import axios from 'axios'
import React from 'react'


const APIToken = "pk.eyJ1IjoiZG1pdHJpeXZhc2lsMTk4NiIsImEiOiJja3Jic2xxbDMwZWY1MnFwZWdndGd3bDdoIn0.rnLyTVQLdAnCWIV9sCfrQA"

function MapChart() {
    const [info, updateInfo] = React.useState(null)
    const [itemList, updateItemList] = React.useState([])
    const [viewport, setV] = React.useState({
        latitude: 55.79550673539962,
        longitude: 37.550489878900656,
        width: "100vw",
        height: "100vh",
        zoom: 12,
    })

    React.useEffect(_ => {
        axios.get("/map_chart")
            .then(data => {
                setV(data.data.options)
                updateItemList(data.data.data)
            })
            .catch(e => console.log(e.message))
    }, [])

    return (
        <div style={{ marginTop: "3rem", marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center" }}>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={APIToken}
                onViewportChange={v => setV(v)}
                mapStyle={"mapbox://styles/dmitriyvasil1986/ckrbt9v7p06x017o94gn8mfcg"}
            >
                {
                    itemList.map(i => {
                        return (
                            <Marker
                                key={i.name}
                                latitude={i.latitude}
                                longitude={i.longitude}
                                onClick={e => {
                                    e.preventDefault()
                                    updateInfo(i)
                                }}
                            >
                                <RoomIcon style={{ cursor: "pointer", color: i.color }} />
                            </Marker>
                        )
                    })
                }
                {info === null ?
                    null :
                    <Popup
                        onClose={e => updateInfo(null)}
                        latitude={info.latitude}
                        longitude={info.longitude}
                    >
                        <div><h3>Name: {info.name}</h3><p>Description: {info.description}</p></div>
                    </Popup>
                }
            </ReactMapGL>
        </div>
    );
}

export default MapChart
