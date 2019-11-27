const Students = {
	get: (classId=-1,date = Dates.lastMonday().to('yyy-mm-dd')) => {
		let path = 'api/public/timetable/weekly/pageconfig'
		let getParams = {
			elementType: 5,
			date: date,
			"filter.klasseId": classId 
		}
		return WebUntis.send(path, getParams)
	}
}
