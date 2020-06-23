
const withStyles = (props, styles)=>{
    console.log('3333', props, styles)
    if(props.staticContext){
        props.staticContext.css.push(styles._getCss())
    }
    return null

}
export default withStyles