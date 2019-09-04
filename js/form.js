$(document).ready(() => {
	$('.submit').click((event) => {
		event.preventDefault()
		let obj = {}
		$('form').serializeArray().forEach((thing) => obj[thing.name] = thing.value)
		
		axios.post('https://wboro-at.herokuapp.com/screwCors', obj).then((res) => {
			console.log('done!')
			$('.shit-inside-the-form').html(`
				<div style="text-align: center;">
					<h1>🎉 You're signed up! 🎉</h1>
					<h2>We're really excited to meet you!</h2>
					<h2>You'll get a text & email the day of the meeting to remind you.</h2>
				</div>

				`)
		}).catch((err) => {
			console.log(err)
		})
	})
})


