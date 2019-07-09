import React, { Component } from 'react'
let Islogin = (Com) => {
    return class extends Component {
        state = {
            islogin: false
        }
        render() {
            let { islogin } = this.state
            return islogin ? <Com {...this.props} /> : <></>
        }
        componentDidMount() {
            let user = JSON.parse(window.localStorage.getItem("user"))
            if (user) {
                if (user.username === "123" && user.password === "123") {
                    this.setState({
                        islogin: true
                    })
                    let { history } = this.props;
                    console.log(this.props)
                    history.push('/mine')
                }
            } else {            
                let { history } = this.props
                history.replace('/login')
            }
        }
    }
}
export default Islogin