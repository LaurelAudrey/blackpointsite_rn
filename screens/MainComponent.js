import { View, Text, Image, ScrollView } from 'react-native';
import BP_Logo from '../assets/images/BP_Logo.png';
import { Card, Header } from 'react-native-elements';
import compass from '../assets/images/compass.png';
import flow from '../assets/images/flow.png';
import balanceBalls from '../assets/images/balanceBalls.png';

function Main() {
    return (
        <>
        <Header backgroundColor='black' 
            leftComponent={{ icon: 'home' }}
            centerComponent={{ text: 'BLACKPOINT COACHING' }}
            rightComponent={{ icon: 'menu' }}
        />
        <ScrollView>
            <Card>
                <Card.Title>NAVIGATION</Card.Title>
                <Card.Image source={compass} />
                <Text style={{ marginBottom: 10, marginTop: 10, textAlign: 'center' }}>
                    To get you want to go, you need to know where you are.
                </Text>
            </Card>
            <Card>
                <Card.Title>FLOW</Card.Title>
                <Card.Image source={flow} />
                <Text style={{ marginBottom: 10, marginTop: 10, textAlign: 'center' }}>
                    Don't just go with the flow.
                </Text>
                <Text style={{ textAlign: 'center' }}>Live in the flow.</Text>
            </Card>
            <Card>
                <Card.Title>BALANCE</Card.Title>
                <Card.Image source={balanceBalls} />
                <Text style={{ marginBottom: 10, marginTop: 10, textAlign: 'center'}}>
                    Happiness, peace, and joy do not root themselves in extremes.
                </Text>
            </Card>
        </ScrollView>
        </>
    );
}

export default Main;