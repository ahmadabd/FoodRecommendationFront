import { NextPage } from "next";
import Head from "next/head";

interface MetaProps {
    title: string;
    description: string;
    keywords: string;
}

const Meta: NextPage<MetaProps> = ({title, description, keywords}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta charSet="utf-8" />
        </Head>
    );
}

Meta.defaultProps = {
    title: "Food Recommendation",
    description: "Get Food Recommendation when you are hungry",
    keywords: "food, recommendation, hungry"
}

export default Meta;