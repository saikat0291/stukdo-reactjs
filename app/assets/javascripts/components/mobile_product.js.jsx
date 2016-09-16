var Product = React.createClass({
  
  getInitialState: function(){
    return{qty: 0};
  },
  
  buy: function(){
    this.setState({qty:this.state.qty + 1});
    this.props.handleTotal(this.props.price);
   // alert("You brought an Android");
  },
  
  
  
  show: function(){
    this.props.handleShow(this.props.name);
  },
  
  render: function(){
    return(
        <div>
        <p>{this.props.name}--${this.props.price}</p>
        <button onClick={this.buy}>Buy</button>
        <button onClick={this.show}>Show</button>
        <h3>QTY:{this.state.qty}items</h3>
        <hr/>
        </div>
      );
  }
});

var Total=React.createClass({
  render: function(){
    return(
      <div>
        <h3>Total Cash:{this.props.total}</h3>
      </div>
     );
  }
});

var ProductForm=React.createClass({
  
  submit: function(e){
    e.preventDefault();
   var product={
     key:this.refs.key.value,
     name:this.refs.name.value,
     price:this.refs.price.value
   }
   this.props.handlecreate(product);
    this.refs.key.value="";
    this.refs.name.value="";
    this.refs.price.value="";
  },
  
  render: function(){
    return(
      <form>
      <input type="integer" placeholder="Product number" ref="key"/>
      <input type="text" placeholder="Product name" ref="name"/>
      <input type="text" placeholder="Product price" ref="price"/>
      <br/>
      <hr/>
      <button onClick={this.submit}>create product</button>
      </form>
      );
  }
});

var Productlist=React.createClass({
  
  getInitialState: function(){
    return{
      total:0,
      productlist:[
        {key:1, name:"Android", price:121},
        {key:2, name:"Apple" ,price:123},
        {key:3, name:"Nokia", price:65}
        ]
      
    };
  },
  
  createproduct: function(product)
  {
    this.setState({productlist:this.state.productlist.concat(product)})
  },
  
  calculateTotal: function(price){
    this.setState({total:this.state.total + price});
   // alert(this.state.total);
  },
  
  showProduct: function(name){
    alert("You select " + name);
  },
  
  render: function(){
    var component=this;
    var products=this.state.productlist.map(function(product){
      return(
        <Product key={product.key} name={product.name} price={product.price} handleShow={component.showProduct} handleTotal={component.calculateTotal}/>
        );
    });
    return(
      <div>
      <ProductForm handlecreate={this.createproduct}/>
        {products}
        <Total total={this.state.total}/>
      </div>
     );
  }
});
