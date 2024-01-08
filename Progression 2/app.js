// const container = document.getElementById('react-container');

// ReactDOM.render("Hello! I am CDN.",container);


class ReactContainer extends React.Component {
    render(){
        return(
            <div>Hello! Welcome to Kalvium
                <div>This is babel</div>
            </div>)
        
    };
}

const container = document.createElementById('react-container');
ReactDOM.render(<ReactContainer/>,container)