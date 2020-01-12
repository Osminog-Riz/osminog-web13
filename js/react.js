class Form extends React.Component {
    //создаем экземпляр класса Form
    constructor(props) {

        super(props);
        //берем значение имени из нижнего рендера
        var name = localStorage.getItem("name") || "";
        //проверяем валидность
        var nameIsValid = this.validateName(name);
        //берем значения для мыла из нижнего рендера
        var mail = localStorage.getItem("mail") || "";
        var comment =  localStorage.getItem("comment") || "";
        //стартовые присвоения состояний (пер-ых, которые меняются в процессе ввода)

        this.state = {
            name: name, // здесь имя
            mail: mail,
            comment: comment,
            nameValid: nameIsValid //булевская штука для проверки валидности введенного имени
        }

        //биндинг функций
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeMail = this.handleChangeMail.bind(this);
        this.handleChangeComment = this.handleChangeComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
        
    }

    // Проверка длины имени
    validateName(name) {
        return name.length > 1;
    }

    // Обработчик на изменение имени
    handleChangeName(event) {
        var val = event.target.value;
        console.log("Имя: " + val);
        var valid = this.validateName(val);
        //меняем состояние переменной value
        this.setState({
            name: event.target.value,
            nameValid: valid
        });
        localStorage.setItem("name", event.target.value);
    }

    handleChangeMail(event) {
        var val = event.target.value;
        console.log("Mail: " + val);
        this.setState({
            mail: event.target.value
        });
        localStorage.setItem("mail", event.target.value);
    }
    
    handleChangeComment(event) {
        var val = event.target.value;
        console.log("Comment: " + val);
        this.setState({
            comment: event.target.value
        });
        localStorage.setItem("comment", event.target.value);
    }

    // @TODO Reset inputs value
    resetForm() {
        localStorage.setItem("name", "");
        localStorage.setItem("mail", "");
        localStorage.setItem("comment", "");
        this.setState({
            name: "",
            mail: "",
            comment: "",
        });
        $(".name1").value = "";
    }

    // При клике на кнопку отправить
    handleSubmit(e) {
        // Запрет обновления страницы
        e.preventDefault();

        if (this.state.nameValid === true) {

            fetch('https://formcarry.com/s/AFY3jk7Zmzm', {
                method: "POST",
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            }).then(
                (response) => (response.json())
            ).then((response) => {
                if (response.status === 'success') {
                    alert("Message Sent.");
                    this.resetForm()
                } else if (response.status === 'fail') {
                    alert("Message failed to send.")
                }
            })
        } else {
            alert("Ошибка ввода");
        }
    }

    render() {

        var nameColor = this.state.nameValid === true ? "green" : "red";

        return (
            <div className="forma container">
                <div className="form_content">
                    <div className="contacts1">
                        <div className="title">AVIS ELECTRONICS</div>
                        <div>+86 (186) 66660854</div>
                        <div className="email">
                            <p className="label">E-Mail: </p><a href="#">sales@aviselectronics.com</a>
                        </div>
                        <div>Mon-Fri: 09:00 - 18:00, <br /> Sat: 09:00 - 12:00 (UTC +08:00)</div>
                    </div>
                    <form id="modal-myform" onSubmit={this.handleSubmit} method="POST" accept-charset="UTF-8">
                        <input className="name1 db" name="firstName" placeholder="Name" type="text" value={this.state.name} onChange={this.handleChangeName}/>
                        <input className="name1 db" name="email" placeholder="E-mail" type="email" value={this.state.mail} onChange={this.handleChangeMail}/>
                        <textarea className="name2 db" name="comment" placeholder="Comment" rows="5" value={this.state.comment} onChange={this.handleChangeComment}/>
                        <button id="modal-myform-sumbit" className="btn butt3" type="submit">Send</button>
                    </form>
                </div>
            </div>
        );
    }
}

// Создаем экземпляр класса
// Параметры: Тэг класса с его атрибутами, переменная куда вставлять
ReactDOM.render(<Form />, document.getElementById('modal'));
