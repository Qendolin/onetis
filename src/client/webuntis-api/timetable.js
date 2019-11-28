const Timetable = {
	get: (date=Dates.lastMonday().to("yyy-mm-dd"),id=client.userId, type = client.userType) => {
		let path = 'api/public/timetable/weekly/data'
		let getParams = {
			elementType: type,
			elementId: id,
			date: date,
			formatId: 1
        }
        return webuntis.sendsend(path,getParams);
	}
}

module.exports = Timetable;