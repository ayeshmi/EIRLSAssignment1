class handleUserTypes{
    constructor(props) {
        super(props);
        
        this.onChangeType = this.onChangeType.bind(this);
        
        this.state = {
          type: ""
          
        };
      }
      onChangeType(e) {
        this.setState({
          type: e.target.value
        });
      }
      PassType(){
          return this.type;
      }
}