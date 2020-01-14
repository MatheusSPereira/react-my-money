import React, { Component } from 'react';

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValeuBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <ValeuBox cols='12 4' color='green' icon='bank' value='R$ 10' text='Total de Créditos' />
                        <ValeuBox cols='12 4' color='red' icon='credit-card' value='R$ 10' text='Total de Débitos' />
                        <ValeuBox cols='12 4' color='blue' icon='money' value='R$ 0' text='Valor Consolidado' />
                    </Row>
                </Content>
            </div>
        )
    }
}

export default Dashboard