
const withStyles = (props, styles)=>{
    if(props.staticContext){
        props.staticContext.css.push(styles._getCss())
    }
    return null

}
export default withStyles