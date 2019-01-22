let clients = [{
	"name": "Ivanov",
	"rentDate": new Date("2018-01-01"),
	"backDate": new Date("2018-01-22")
},
{
	"name": "Serov",
	"rentDate": new Date("2018-01-03"),
	"backDate": new Date("2018-01-14")
},
{
	"name": "Salnikov",
	"rentDate": new Date("2018-02-10"),
	"backDate": new Date("2018-02-20")
},
{
	"name": "Snezhina",
    "rentDate": new Date("2018-03-15"),
	"backDate": new Date("2018-04-10")
},
{
	"name": "Pivkina",
    "rentDate": new Date("2018-04-18"),
	"backDate": new Date("0000-00-00")
},
{
	"name": "Belov",
    "rentDate": new Date("2018-05-20"),
	"backDate": new Date("0000-00-00")
},
{
	"name": "Marshina",
    "rentDate": new Date("2018-06-26"),
	"backDate": new Date("2018-07-23")
},
{
	"name": "Metalov",
    "rentDate": new Date("2018-07-30"),
	"backDate": new Date("2018-08-20")
},
{
    "name": "Carev",
    "rentDate": new Date("2018-08-15"),
	"backDate": new Date("2018-08-24")
},
{
	"name": "Bigov",
    "rentDate": new Date("2018-09-19"),
	"backDate": new Date("2018-09-29")
} ];



let debt;                                           //Сюда будут записываться задолженные дни
let today = new Date();                             //Переменная с текущей датой
today.setHours(0, 0, 0, 0);
let forCurrent= new Date("0000-00-00");             

function whoIsBad(surname){                                 //Функция подсчета задолженности по конкретному клиенту
	for (let i= 0; i<clients.length; i++){
		if (clients[i]["name"] === surname ){
			if(clients[i].rentDate<clients[i].backDate){
				let dd =  clients[i].rentDate;
				dd.setDate(dd.getDate() + 10);

				debt = Math.ceil(Math.abs(clients[i].backDate.getTime() - dd) / (1000 * 3600 * 24));
				console.log('Задолженность ' + debt + ' дней');


			}
			else if (clients[i].backDate = forCurrent){     //Условие при ситуации, когда клиент до сих пор не вернул книгу
				let dd =  clients[i].rentDate;
				dd.setDate(dd.getDate() + 10);
                debt = Math.ceil(Math.abs(dd - today) / (1000 * 3600 * 24));
                console.log(debt);

			}

		}
	}
}

whoIsBad("Metalov");                            


function theWorstClient () {                              //Функция по поиску самого злостного должника
    let debtDays=0;                                 
	let worstClient={};                                   //Объект с данными по злостному должнику
	for (let i= 0; i<clients.length; i++){
			if(clients[i].rentDate<clients[i].backDate){
				let dd =  clients[i].rentDate;            //Переменная дата взятия книги 
				dd.setDate(dd.getDate() + 10);            //+ 10 дней максимального пользования

				debt = Math.ceil(Math.abs(clients[i].backDate.getTime() - dd) / (1000 * 3600 * 24));  //Вычисление кол-ва просроченных дней
				
			}
			else if (clients[i].backDate = forCurrent){   //Условие при ситуации, когда клиент до сих пор не вернул книгу
				let dd =  clients[i].rentDate;
				dd.setDate(dd.getDate() + 10);
                debt = Math.ceil(Math.abs(dd - today) / (1000 * 3600 * 24));
                

			}
            if (debt>debtDays){                           //Запись наибольшего долга в переменную debtDays по ходу прохождения массива
            	debtDays=debt;
            	worstClient.name =clients[i].name;        //добавление в объект значения имя
            }
            
		}
		worstClient.days=debtDays;                        //добавление в объект значения дни
		console.log(worstClient);

	}




theWorstClient ();

