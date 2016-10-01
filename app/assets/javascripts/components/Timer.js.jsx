//Timmer Coundown
var Detonator=React.createClass({
  getInitialState: function(){
    return{
      timeRemaning: 10
    };
  },
  tick: function(){
    var actualTimeRemaining = this.state.timeRemaning -1;
    if(actualTimeRemaining==0)
    {
      this.setState({timeRemaning: "BooM"});
      clearInterval(this.interval);
    }
    else{
      this.setState({timeRemaning: actualTimeRemaining});
    }
  },
  componentDidMount: function(){
    this.interval=setInterval(this.tick,1000);
  },
  render: function(){
    return(
      <div>
        <div>{this.state.timeRemaning}</div>
      </div>
       
      );
  }
});