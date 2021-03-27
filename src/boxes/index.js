const {registerBlockType} = wp.blocks;
const {RichText} = wp.editor
/* import {ReactComponent as Logo} from '../pizzeria-icon.svg'; */

registerBlockType('kervis/boxes', {
        title: 'Boxer',
        icon: 'store',
        categoria: 'kervis',
        edit: () =>
        {
            return ( 
                <div>
                    <h2>
                        <RichText/>
                    </h2>
                </div>
            )
        },
        save : () => {
            return(
                <h2>Desde el front end</h2>
            )
        }

});
