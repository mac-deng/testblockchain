import React, { useState } from 'react';
import ReactJson from 'react-json-view'
import axios from 'axios';
import { useMoralis } from "react-moralis";
axios.defaults.timeout = 30000;
let isLoading=false;

function CreateAccount() {

	const [accountText,setText] = useState('');
	const [resultText,setResultText] = useState('');
	const [resultColor,setResultColor] = useState('');
	const [codeText,setCodeText] = useState({});
	const [myAddress,setMyAddress] = useState('');
  	const { Moralis } = useMoralis();

	function clearText (){
		setTimeout(()=>{
			setResultText('')
		},2000)
	}

	const create =  ()=>{
		if(!accountText){
			setResultText('请输入address~')
			setResultColor('red')
			return 
		}
		if(isLoading){
			return 
		}
		setResultText('创建中~')
		setResultColor('white')
		isLoading=true;
		axios.post('https://enigmatic-gorge-44583.herokuapp.com/account/create',{
			address:accountText
		}).then(function (response) {
			const {data} = response;
			console.log(data);
			if(data.message == "Success"){
				setResultText('创建成功~')
				setResultColor('green')
				clearText();

				setCodeText(data.result)
			}else{
				setResultText('创建失败~')
				setResultColor('red')
				clearText();
			}
			isLoading=false;
		})
		.catch(function (error) {
			console.log(error);
			isLoading=false;
		});
	}

	const get = async ()=>{

		var user = Moralis.User.current();
		//console.log(user)

		if (!user) {
			await Moralis.authenticate({ signingMessage: "使用 Moralis 登录" })
		  .then( (user)=>{
		     //console.log("logged in user:", user);
			setMyAddress(user.get('ethAddress'))
		  })
		  .catch(function (error) {
			alert(`请确认安装metamask并登录,然后刷新页面`)
		  });
		}else{
			setMyAddress(user.get('ethAddress'))
		}
	}

	return (<div className="section">
			<div className="tip">创建账号</div>
			<input className='input' placeholder="请输入address" onChange={(e)=>{
				//console.log(e.target.value)
				setText(e.target.value)
			}} />
			<button className="button" onClick={create}>创建</button> <span style={{'color':resultColor}}>{resultText}</span>
			<div className="code-temp">
				<ReactJson src={codeText} />
			</div>
			<div className="tip">获取钱包地址</div>
			<button className="button" onClick={get}>获取</button> <span style={{'color':'green'}}>{myAddress}</span>
		</div>
	);
}

export default CreateAccount;
