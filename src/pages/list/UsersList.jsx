import React from 'react'
import { StyledPage } from '../../components/common/StyledCommon'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { userColumns, userRows } from '../../data/userData'
import { UsersListStyled } from './UserListStyled'

const UsersList = () => {
    return (
        <StyledPage>
            <UsersListStyled>
                <DataGrid
                    components={{ Toolbar: GridToolbar }}
                    columns={userColumns}
                    rows={userRows}
                />
            </UsersListStyled>
        </StyledPage>
    )
}

export default UsersList
