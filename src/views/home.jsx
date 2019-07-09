import React, { Component } from 'react'
import Head from '../component/head'
import Foot from '../component/foot'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
export default class Home extends Component {
    state={
        swiperlist:[
            {
                imgUrl:'//gw.alicdn.com/imgextra/i3/59/O1CN01izwKq51CJ3uLvfttq_!!59-0-lubanu.jpg',
                id:'2131'
            },
            {
                imgUrl:'http://gw.alicdn.com/imgextra/i3/35/O1CN01oKMitj1C84P1F3rCV_!!35-0-lubanu.jpg',
                id:13213
            },{
                imgUrl:'https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg',
                id: 6546
            },{
                imgUrl:'//gw.alicdn.com/imgextra/i3/57/TB20V01gsuYBuNkSmRyXXcA3pXa_!!57-0-luban.jpg',
                id:76543
            },{
                imgUrl:'https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg',
                id:76543987
            },{
                imgUrl:'//gw.alicdn.com/imgextra/i2/193/O1CN01XFs8um1DIQysRUO5a_!!193-0-lubanu.jpg',
                id:9876
            }
        ]
    }
    render() {
        let {swiperlist}=this.state
        console.log(swiperlist)
        return (
            <div className="wrap">
                <Head/>
                <main className="main">
                    <div className="swiper-container banner">
                        <div className="swiper-wrapper">
                           {swiperlist.map(item=> <div className="swiper-slide" key={item.id}>
                                <img src={item.imgUrl} alt=""/>
                            </div>)}
                        </div>
                    </div>
                </main>
                <Foot/>
            </div>
        )
    }
    componentDidMount(){
        let {swiperlist}=this.state
        this.setState({
            swiperlist
        },()=>{
           new Swiper('.swiper-container',{
               loop:true,
               autoplay:{
                   disableOnInteraction:false
               }
           })
        })
    }
}
