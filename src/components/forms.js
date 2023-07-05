import styled from '@emotion/styled';

export const InputContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
});

export const InputLabel = styled('div')({
    fontSize: 14,
    margin: '0 10px'
});

export const TextInputEmail = styled('input')({
    border:'1px solid black',
    width: '100%',
    height: 20
});

export const ActionBtn = styled('button')({
    display: 'flex',
    padding: 5,
    margin: '10px auto 0',
    cursor: 'pointer',
    '> a': {
        textDecoration: 'none',
        color: '#000'
    }
});