import { Html,Head, Font, Preview, Heading, Row, Section, Text, Button } from '@react-email/components';


interface VerificationEmailProps {
    username: string;
    otp: string;
}


export default function VerificationEmail({username, otp}: VerificationEmailProps) {
    return (
        <Html lang="en" dir="ltr">
            <Head>
                <title>Verification Code</title>
                <Font fontFamily="Roboto" fallbackFontFamily="Verdana" webFont={{url:"https://fonts.gstatic.com/s/roboto.v27/KF0mCnqEu92Fr1Mu4msKKTU1Kg.woff2", format:"woff2"}} fontWeight={400} fontStyle='normal' />
            </Head>
            <Preview>Here&apos;s your Verification code : {otp}</Preview>
            <Section>
                <Row>
                    <Heading as='h1'> Hello {username}</Heading>
                </Row>
                <Row>
                    <Text>
                        Thank you for your registering. Please us efollowing verification code to complete your registration.
                    </Text>
                </Row>
                <Row>{otp}</Row>
            </Section>

        </Html>
    );
}

