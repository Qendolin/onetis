const All = {
	get: (date = Dates.lastMonday().to('yyy-mm-dd')) => {
		let path = 'api/public/timetable/weekly/pageconfig'
		let getParams = {
			elementType: 2,
			date: date
		}
		return WebUntis.send(path, getParams)
	}
}
