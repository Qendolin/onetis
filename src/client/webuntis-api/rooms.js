const Rooms = {
	get: (buildingId = -1, date = Dates.lastMonday().to('yyy-mm-dd')) => {
		let path = 'api/public/timetable/weekly/pageconfig'
		let getParams = {
			elementType: 4,
			date: date,
			'filter.buildingId': buildingId
		}
		return webuntis.sendsend(path, getParams)
	}
}

module.exports = Rooms;