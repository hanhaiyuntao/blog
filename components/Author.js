import {Avatar,Divider} from 'antd';
import '../static/style/components/Author.css'

const Author = ()=>{
    return (
        <div className = 'aothor-div comm-box'>
            <div >
            <Avatar className='head-icon' size={100} src="../static/images/head.jpg" ></Avatar>

            </div>
            <div>
                大家好我是练习bug时长三年半的个人练习生王海涛,喜欢唱跳rap篮球,豫章故郡,洪都新府,星分翼轸,地接衡庐.
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account"  />
                <Avatar size={28} icon="qq"  className="account" />
                <Avatar size={28} icon="wechat"  className="account"  />
            </div>
        </div>

    )
}

export default Author