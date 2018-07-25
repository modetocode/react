import React, {Component} from 'react';


const simpleHOC = (Com) => {
    class WrapperCom extends Component {
        render() {
            return (
                <div className='wrapped-com'>
                    <Com {...this.props} />
                </div>
            )
        }
    }

    return WrapperCom;
}

export default simpleHOC;