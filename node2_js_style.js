import{odd, even} from './node2module';

const checkOddOrEven = (num)=>{
    if(num %2 ){
        return odd;
    }else{
        return even;
    }
}

export default checkOddOrEven;