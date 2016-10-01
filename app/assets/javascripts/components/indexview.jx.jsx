	
var Spam=React.createClass({
	render:function(){
		return(
				<span className={this.props.name}>{this.props.type}</span>
			);
	}
});
var Button=React.createClass({
render: function(){
	return(
			<div>
			<button type="button" className="navbar-toggle collapsed" dataToggle="collapse" dataTarget="#bs-example-navbar-collapse-1" ariaExpanded="false">
					<Spam name="sr-only" type="Toggle navigation"/>
					<Spam name="icon-bar" type=""/>
					<Spam name="icon-bar" type=""/>
					<Spam name="icon-bar" type=""/>
				</button>
			</div>
		);
}
});
var Nav=React.createClass({
render:function(){
	return(
			<nav className="navbar navbar-default">
				<div className="container-fluid">
				<div className="navbar-header">
				<Button/>
				<a className="navbar-brand" href="/"><i className="fa fa-circle-o-notch"></i> Home</a>
				<a className="navbar-brand" href="/react"><i className="fa fa-circle-o-notch"></i> Reactpage</a>
				</div>
				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul className="nav navbar-nav navbar-right">
				<li><a href="/about">About</a></li>
				<li><a href="/users/sign_in">Login</a></li>
				</ul>
				</div>
				</div>
			</nav>
		);
}
});
var Paragraph=React.createClass({
render: function(){
	return(
			<div className="container">
			<div className="jumbotron">
				<h1><i className="fa fa-circle-o-notch"></i>Saikat</h1>
				<p>This is my Smart to do list ruby on rails Application</p>
				<a className="btn btn-primary btn-lg" href="/users/sign_up">Sign Up</a>
			</div>
		</div>
		);
}
});
	var View=React.createClass({
	render: function(){
	return(
		<div>
			<Nav/>
			<Paragraph/>
		</div>
		);
	}
	});
	$(function(){
	$('[id="container"]').each(function(){
	ReactDOM.render(<View/>,this);
	});
	});
