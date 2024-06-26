import React from 'react';
import { Container, Typography, Link, List, ListItem, ListItemText } from '@mui/material';

const PrivacyPolicy: React.FC = () => {
    return (
        <Container maxWidth="md" style={{ padding: '20px' }}>
            <div>
                <Typography variant="h4" gutterBottom>
                    Privacy Policy
                </Typography>
                <Typography variant="body1" paragraph>
                    Last updated: June 14, 2024
                </Typography>
                <Typography variant="body1" paragraph>
                    This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information
                    when You use the Service and tells You about Your privacy rights and how the law protects You.
                </Typography>

                <Typography variant="h5" gutterBottom>
                    Interpretation and Definitions
                </Typography>

                <Typography variant="h6" gutterBottom>
                    Interpretation
                </Typography>
                <Typography variant="body1" paragraph>
                    The words of which the initial letter is capitalized have meanings defined under the following conditions.
                    The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </Typography>

                <Typography variant="h6" gutterBottom>
                    Definitions
                </Typography>
                <Typography variant="body1" paragraph>For the purposes of this Privacy Policy:</Typography>
                <List>
                    <ListItem>
                        <ListItemText primary="Account" secondary="A unique account created for You to access our Service or parts of our Service." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Company" secondary="(referred to as either 'the Company', 'We', 'Us' or 'Our' in this Agreement) refers to Your Company Name, Your Address." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Cookies" secondary="Small files that are placed on Your computer, mobile device, or any other device by a website, containing the details of Your browsing history on that website among its many uses." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Country" secondary="Refers to: Country Name" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Device" secondary="Any device that can access the Service such as a computer, a cellphone, or a digital tablet." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Personal Data" secondary="Any information that relates to an identified or identifiable individual." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Service" secondary="Refers to the Website." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Service Provider" secondary="Any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service, or to assist the Company in analyzing how the Service is used." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Usage Data" secondary="Data collected automatically, either generated by the use of the Service or from the Service infrastructure itself." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Website" secondary={<Link href="https://yourwebsite.com" target="_blank" rel="noopener">https://yourwebsite.com</Link>} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="You" secondary="The individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable." />
                    </ListItem>
                </List>

                <Typography variant="h5" gutterBottom>
                    Collecting and Using Your Personal Data
                </Typography>

                <Typography variant="h6" gutterBottom>
                    Types of Data Collected
                </Typography>

                <Typography variant="h6" gutterBottom>
                    Personal Data
                </Typography>
                <Typography variant="body1" paragraph>
                    While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You.
                    Personally identifiable information may include, but is not limited to:
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText primary="Email address" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="First name and last name" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Phone number" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Address, State, Province, ZIP/Postal code, City" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Usage Data" />
                    </ListItem>
                </List>

                <Typography variant="h5" sx={{mb:5}} gutterBottom>
                    General Policy Statements
                </Typography>

                <Typography variant="body1" paragraph>
                    Now, let's get real. We collect data, but not to spy on you, promise! We just want to improve your experience and maybe, just maybe, figure out why you spend 5 hours browsing cat videos.
                </Typography>
                <Typography variant="body1" paragraph>
                    And hey, while we’re at it, let’s talk about cookies. Not the delicious kind your grandma bakes, but the ones that help us remember you. If only they were chocolate chip, right?
                </Typography>
                <Typography variant="body1" paragraph>
                    Your data helps us make our website more awesome. It’s like adding extra cheese to a pizza. Who doesn’t want more cheese?
                </Typography>
                <Typography variant="body1" paragraph>
                    We promise not to sell your data to aliens or use it to clone dinosaurs. Though, a pet T-Rex sounds kinda cool.
                </Typography>
                <Typography variant="body1" paragraph>
                    If you have any questions, feel free to reach out to us. We're here to help, or at least make you laugh. Stay awesome!
                </Typography>
            </div>
        </Container>
    );
};

export default PrivacyPolicy;
