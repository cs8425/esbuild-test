import { h, Fragment, Component } from 'preact';
import { useState, useRef, useEffect } from 'preact/hooks';

import logoUrl from './empty.png';
import './main.css';

// ArcGIS
// import '@arcgis/core/assets/esri/themes/light/main.css';

// import any of these two lines cause static file loading slow
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

function App(props) {
	const mapEl = useRef(null);
	const [mapIns, setMapIns] = useState(null);

	const config = {
		mapConfig: {
			basemap: "osm", //"topo-vector",
		},
	};

	// init map
	/*useEffect(() => {
		console.log("init ArcGIS Map...", mapEl, Map, MapView);

		const scoped_map = new Map(config.mapConfig || null);
		const scoped_view = new MapView({
			...config,
			...{
				map: scoped_map,
				container: mapEl.current,
			},
		});

		scoped_view.ui.components = []; // clear default UI

		(async () => {
			console.log("view.when()...");
			await scoped_view.when();
			console.log("view.when()...end");
			setMapIns({
				map: scoped_map,
				view: scoped_view,
			});
		})();

		return () => {
			console.log("ArcGIS Map clean up...");
			scoped_view.destroy();
			scoped_map.destroy();
		};
	}, []);*/

	return (
		<div>
			<img className="logo" src={logoUrl} />
			<img className="logo" src="./empty2.png" />
			<div id="map" ref={mapEl}></div>
		</div>
	);
}

export default App;
export { App };
