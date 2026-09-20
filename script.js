const cardHolder = document.getElementById("cardHolder")
let drives = []; //List of Drives

class Drive {
	constructor(name, location, dates, times, tags, desc) {
		this.name = name; //String
		this.location = location; //String (Address)
		this.dates = dates; //String (Can be Every Day)
		this.times = [...times]; //Array of Strings of format "Monday: 2-3"
		this.tags = [...tags]; //Array of Strings
		this.desc = desc; //String

		this.created = false;

		this.sat = false;
		this.sun = false;
		this.mon = false;
		this.tue = false;
		this.wed = false;
		this.thu = false;
		this.fri = false;

		this.food = false;
		this.toiletries = false;
		this.babyProducts = false;
		this.clothing = false;
		this.schoolSupplies = false;

		this.visible = true;
		this.card = document.createElement("div");

		drives.push(this);
	}

	create() {
		if (!this.created) {
			this.card.className = "card";

				const name = document.createElement("h2");
				name.className = "card-name";
				name.textContent = this.name;
				this.card.appendChild(name);

				const location = document.createElement("div");
				location.className = "card-location";
				location.textContent = this.location;
				this.card.appendChild(location);

				const dates = document.createElement("div");
				dates.className = "card-dates";
				dates.textContent = this.dates;
				this.card.appendChild(dates);

				const times = document.createElement("div");
				times.className = "card-times";
				for (let time of this.times) {
					times.textContent += (time+'\n');
					const indicator = time.slice(0,2); //First two letters
					if (indicator == "Sa") {this.sat = true;}
					if (indicator == "Su") {this.sun = true;}
					if (indicator == "Mo") {this.mon = true;}
					if (indicator == "Tu") {this.tue = true;}
					if (indicator == "We") {this.wed = true;}
					if (indicator == "Th") {this.thu = true;}
					if (indicator == "Fr") {this.fri = true;}
				}
				this.card.appendChild(times);

				const tags = document.createElement("div");
				tags.className = "card-tags";
				for (let tag of this.tags) {
					tags.textContent += (tag+', ');
					if (tag == "Food") {this.food = true;}
					if (tag == "Toiletries") {this.toiletries = true;}
					if (tag == "Baby Products") {this.babyProducts = true;}
					if (tag == "Clothing") {this.clothing = true;}
					if (tag == "School Supplies") {this.schoolSupplies = true;}
				}
				tags.textContent = tags.textContent.slice(0, tags.textContent.length-2);
				this.card.appendChild(tags);


				const desc = document.createElement("div");
				desc.className = "card-desc";
				desc.textContent = this.desc;
				this.card.appendChild(desc);

			cardHolder.appendChild(this.card);
			this.created = true;
		}
	}

	changeVisibility() {
		if (this.visible) {
			this.card.style.display = "none";
		}

		else {
			this.card.style.display = "block";
		}

		this.visible = !this.visible;
	}

	hide() {
		this.visible = false;
		this.card.style.display = "none";
	}

	show() {
		this.visible = true;
		this.card.style.display = "block";
	}
}

function hideMon() {
	for (let drive of drives) {
		if (drive.mon == false) {
			drive.hide();
		}

		else {
			drive.show();
		}
	}
}

function hideTue() {
	for (let drive of drives) {
		if (drive.tue == false) {
			drive.hide();
		}

		else {
			drive.show();
		}
	}
}

function hideWed() {
	for (let drive of drives) {
		if (drive.wed == false) {
			drive.hide();
		}

		else {
			drive.show();
		}
	}
}

function hideThu() {
	for (let drive of drives) {
		if (drive.thu == false) {
			drive.hide();
		}

		else {
			drive.show();
		}
	}
}

function hideFri() {
	for (let drive of drives) {
		if (drive.fri == false) {
			drive.hide();
		}

		else {
			drive.show();
		}
	}
}

function hideSat() {
	for (let drive of drives) {
		if (drive.sat == false) {
			drive.hide();
		}

		else {
			drive.show();
		}
	}
}

function hideSun() {
	for (let drive of drives) {
		if (drive.sun == false) {
			drive.hide();
		}

		else {
			drive.show();
		}
	}
}

function showAll() {
	for (let drive of drives) {
		drive.show();
	}
}


function hideFood() {
	for (let drive of drives) {
		if (drive.food == false) {
			drive.hide();
		}

		else {
			drive.show();
		}
	}
}

function hideToil() {
	for (let drive of drives) {
		if (drive.toiletries == false) {
			drive.hide();
		}

		else {
			drive.show();
		}
	}
}

function hideBaby() {
	for (let drive of drives) {
		if (drive.babyProducts == false) {
			drive.hide();
		}

		else {
			drive.show();
		}
	}
}

function hideClot() {
	for (let drive of drives) {
		if (drive.clothing == false) {
			drive.hide();
		}

		else {
			drive.show();
		}
	}
}

function hideScho() {
	for (let drive of drives) {
		if (drive.schoolSupplies == false) {
			drive.hide();
		}

		else {
			drive.show();
		}
	}
}


fetch("data.csv")
    .then(response => response.text())
    .then(data => {

        const rows = data.trim().split("\n");

        for (let i = 3; i < rows.length; i++) {
            const columns = rows[i].split("\t");

            const name = columns[0];
            const location = columns[1];
            const dates = columns[2];

            // Convert times entry into array
            const times = columns[3].split(";");
            const tags = columns[4].split(";");

            const desc = columns[5];

            const drive = new Drive(
                name,
                location,
                dates,
                times,
                tags,
                desc
            );

            drive.create();
        }
    });