import React,{useEffect,useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import { Row, Col} from 'antd';
import LeftImg from '../../assets/images/left-img.jpg';
import styled from "styled-components";
import { Form, Input, Button } from 'antd';
import {ActionCreators} from '../../store/actions/rootActions'
// import { useHistory } from "react-router-dom";
const Home = () => {
  
    const layout = {
        labelCol: {
          span: 6,
        },
        wrapperCol: {
          span: 16,
        },
      };
      const tailLayout = {
        wrapperCol: {
          offset: 8,
          span: 16,
        },
      };
      // Fetch Api From Fake json
    //  const history =  useHistory();
     const dispatch = useDispatch();
     const users = useSelector(state => state.demoReducer);
     useEffect(()=>{
      dispatch(ActionCreators())
    },[])
    // Input data store in a State
    const [user,setUser] = useState({
      username:"",
      email:""
    });
    const {username,email} = user;
    const onInputChange = (e) => {
      setUser({...user, [e.target.name] : e.target.value})
    }
     
    const handleSubmit =  async () => {
         await axios.post('http://localhost:3002/users',user);
         dispatch(ActionCreators())
    }
    

   
    return (
        <Row gutter={[24, 24]}>
        <Col span={24} md={{span:12}} >
          <ImgWrap>
             <div className="left_container">
             { 
               users.data.map((user,index)=>(
                   <div className="content-wrap" key={index}>
                   <h3>{user.username}</h3>
                   <h4>{user.email}</h4>
               </div>
               ))
             } 
             </div>
          </ImgWrap>
        </Col>
        <Col span={24} md={{span:12}} >
        
        <FormWrap>
        <LoginForm>Login Form</LoginForm>
      <Form {...layout}  >
        
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input 
         name="username"
        value={username}
        onChange= {e => onInputChange(e)}/>
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input 
        
        value={email}
        name="email"
        onChange= {e => onInputChange(e)}/>
      </Form.Item>
      <Form.Item {...tailLayout }>
       <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          Submit
        </Button>
        </Form.Item>
      
    </Form>
        </FormWrap>
        </Col>
        </Row>
    )
}
const ImgWrap = styled.div`
background-image: url("${LeftImg}");
background-position: center;
height: 28vw;
background-size: cover;
`

const FormWrap = styled.div`
height: 100%;
margin: auto;
padding:44px 20px 20px 20px;
background: #fff;
max-width: 400px;
border-radius:10px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);
`
const LoginForm = styled.h1`
  font-size:2rem;
  font-weight:bold;
  text-align:center;
  margin-bottom:100px;
`;
export default Home
