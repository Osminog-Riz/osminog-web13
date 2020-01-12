class Form extends React.Component {
  //создаем экземпляр класса Form
    constructor(props){
        
        super(props);
        //берем значение имени из нижнего рендера
        var name = props.name;
        //проверяем валидность
        var nameIsValid = this.validateName(name);
        //берем значения для мыла из нижнего рендера
        var mail = props.mail;
        //стартовые присвоения состояний (пер-ых, которые меняются в процессе ввода)
       
        this.state = {
            name: name, //здесь имя
            mail: mail,
            comment: 'Comment',
            nameValid: nameIsValid //булевская штука для проверки валидности введенного имени
        }

        //биндинг функций
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeMail = this.handleChangeMail.bind(this);
        this.handleChangeComment = this.handleChangeComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this); 
    }
    
    validateName(name){
        return name.length > 2;
    }
    
    //обработчик на изменение имени
    handleChangeName(event){
        var val = event.target.value;
        console.log(val);
        var valid = this.validateName(val);
        //меняем состояние переменной value
        this.setState({name: event.target.value, nameValid: valid });
    }
    
    handleChangeMail(event){
        var val = event.target.value;
        console.log(val);
        this.setState({mail: event.target.value});
    }
    handleChangeComment(event){
        this.setState({comment: event.target.value});
    }

    //НЕ РАБОТАЕТ
    resetForm(props) {
        this.setState({name: props.name, mail: mail, comment: '' })
    }
    
   handleSubmit(e) {
    e.preventDefault();
      
       if (this.state.nameValid===true){
      
    fetch('https://formcarry.com/s/AFY3jk7Zmzm',{
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
    	(response) => (response.json())
       ).then((response)=>{
      if (response.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.status === 'fail'){
        alert("Message failed to send.")
      }
    })
       } else {
            alert("Ошибка ввода");
       }
  }
    
    render() {
        
        var nameColor = this.state.nameValid===true?"green":"red";
        
    return (
        <div>
        <div className="contacts1">
                    <div className="title">AVIS ELECTRONICS</div>
                    <div>+86 (186) 66660854</div>
                    <div className="email">
                        <p className="label">E-Mail: </p><a href="#">sales@aviselectronics.com</a>
                    </div>
                    <div>Mon-Fri: 09:00 - 18:00, <br /> Sat: 09:00 - 12:00 (UTC +08:00)</div>
        </div>
        <div className="Form">
        <form id="my-formcarry" acceptCharset="UTF-8" onSubmit={this.handleSubmit} method="POST">
            
            <div className="form-Group">
                <label htmlFor="name"> Имя: </label> 
                <input type="text"
                    className="form-control"
                    name="name" 
                    value={this.state.value}
                    onChange={this.handleChangeName} 
                    style={{borderColor:nameColor}}  />
            </div>
        
            <div className="form-group">
                <label htmlFor="mail"> E-mail: </label>
                <input type="email" 
                    className="form-control"
                    aria-describedby="emailHelp"
                    name="E-mail" 
                    value={this.state.valueMail} 
                    onChange={this.handleChangeMail} />
            </div>
        
            <div className="form-group">
                <label htmlFor="comment"> Комментарий </label>
                <textarea name="text" 
                        value={this.state.valueComment} 
                        onChange={this.handleChangeComment}/>
            </div>
        
            <input type="submit" value="Отправить" /> 
        
        </form>
        </div>
</div>
    );
  }
}


ReactDOM.render(
  <Form name="" mail=""/>,
  document.getElementById('root')
);