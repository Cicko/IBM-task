## Days Finder (configured for friday 13)

### Requirements
 - Node v14

### Installation steps
 - `npm install`


### Run app locally in port 3000
 - `npm start`

### Build production files
 - `npm run build`

### Run tests
 - `npm test`




### Logic requirements
 - Min year supported is `100` because of Date object nature (year 99 is transformed into 1999)
 - Max year is `275760` 
 - Language is defaulted to English (configurable in config/config.ts)
 - Day and weekday is defaulted to friday 13. Fields modification is disabled (can be changed in config/config.ts)

