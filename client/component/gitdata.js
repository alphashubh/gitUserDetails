import React from 'react';
import axios from 'axios';

export default class Gitdata extends React.Component{
    constructor(){
        super();
        this.state={
            repos: [],
            loading: '',
            image: '',
        }
    }
    // componentWillMount(){
    //     axios.interceptors.request.use((config)=> {
    //         this.setState({loading: 'Loading...'});
    //         return config;
    //     })
    //     axios.interceptors.response.use((config) => {
    //         this.setState({loading: ''});
    //         return config;
    //     })
    //     axios.get('https://api.github.com/users/alphashubh/repos'
    //     )
    //     .then(res => {
    //         console.log(res.data)
    //         this.setState({ repos: res.data});
    //     })
    //     .catch( error => console.log(error));
    // }

    handleClick(){
        axios.interceptors.request.use((config)=> {
            this.setState({loading: 'Loading...', repos: [], image: ''});
            return config;
        })
        axios.interceptors.response.use((config) => {
            this.setState({loading: ''});
            return config;
        })
        axios.get(`https://api.github.com/users/${this.refs.input.value}/repos`
        )
        .then(res => {
            console.log(res.data)
            this.setState({ repos: res.data, image: res.data[0].owner.avatar_url});
        })
        .catch( error => console.log(error));
    }
    render(){
        return(
            <div>
            <input 
            placeholder="Username"
            ref="input"
            />
            <button 
            onClick={this.handleClick.bind(this)}            
            >Go</button>
            <div>
            <img src={this.state.image} />
            {this.state.loading}
            {
                this.state.repos.map((item, index) => (
                    <div key={index}>{item.id} {item.name}
                    <p><a href={item.html_url} target="_blank">{item.html_url}</a></p>
                    </div>
                ))
            }</div>
            </div>
        );
    }
}