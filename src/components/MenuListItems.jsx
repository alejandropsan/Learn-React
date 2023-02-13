import { List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material'
import {Home, Settings, Task} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const getIcon = (icon) => {
    switch(icon){
        case 'HOME':
        return (<Home/>)
        case 'TASKS':
        return (<Home/>)
        case 'SETTINGS':
        return (<Settings/>)
        default:
            return (<Home/>)   
    }
}



const MenuListItems = (list) => {

    const history = useNavigate()

    const navigateTo = (path) => {
        history(path)
    }


    return (

        <List>
            {list.map(({text, path, icon}, index) => 
            (
                <ListItem key={index} ButtonBase onClick={() => navigateTo(path)}>
                    <ListItemIcon>
                        {getIcon(icon)}
                    </ListItemIcon>
                    <ListItemText 
                        primary={text}
                    />
                </ListItem>
            )
            
            )}
        </List>
    )
}


export default MenuListItems