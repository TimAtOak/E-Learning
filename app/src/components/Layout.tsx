import { ReactNode } from 'react';

type LayoutProps = {
    children?: ReactNode;
}

export const Layout = (props: LayoutProps) => {


return(
    <>
    {props.children}
    </>
);

}

