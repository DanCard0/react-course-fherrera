import { memo } from 'react';

export const Small = memo(({ value }) => {
    console.log('Redibujado!');
    return (
        <small>{value}</small>
    )
});
