# for issuse report

if import any of these lines will cause static file loading slow

```js
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
```

Not sure why, may be the package `@arcgis/core` too large?

## install & test & build

* install: `npm install`
* build: `npm run build`
* develop (serve mode): `npm run start`
