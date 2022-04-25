import web3 from '../src/connection/web3'
import { useDispatch , useSelector } from 'react-redux';
  
import {account} from '../src/redux/selector'
function Login(){
    const dispatch = useDispatch();
    const Web3Connect = useSelector(account)
    const connectWalletHandler = async()=>{
        try {
            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });
          } catch(error) {
            console.error(error);
          }
          const accounts = await web3.eth.getAccounts();
          const account = accounts[0];
          dispatch({type: 'ACCOUNT', account: account})  
    }
    

    // let etherscanUrl;

    // if(web3Ctx.networkId === 3) {
    //   etherscanUrl = 'https://ropsten.etherscan.io'
    // } else if(web3Ctx.networkId === 4) {
    //   etherscanUrl = 'https://rinkeby.etherscan.io'
    // } else if(web3Ctx.networkId === 5) {
    //   etherscanUrl = 'https://goerli.etherscan.io'
    // } else {
    //   etherscanUrl = 'https://etherscan.io'
    // }


    return (
        <div>
            <h1>xxxx</h1>
            {Web3Connect && 
                <a 
                className="nav-link small" 
                // href={`${etherscanUrl}/address/${web3Ctx.account}`}
                target="blank"
                 rel="noopener noreferrer"
              >
                  <h1>{Web3Connect}</h1>
             </a>
            }
            {!Web3Connect &&
                <button
                    onClick={connectWalletHandler}
                >
                    Connect your wallet
                </button>
            
            }
        </div>
    )
}

export default Login