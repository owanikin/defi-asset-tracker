import React from 'react'
import { TransactionLog } from '@components/TransactionLog'
import { CompoundLayout } from '@components/Layout'
import { FormPageHeader } from '@components/Body'
import { MultiStat } from '@components/Statistic'
import { TransactionList, TransactionSearch } from '@components/List'


export default function Page(): JSX.Element {

    return (
        <CompoundLayout>
            <FormPageHeader
                formHeading="Hello Andrew"
                formSubHeading="Track your assets on the BSC and ETH Network"
            />
            <MultiStat />
            <TransactionLog />
            <TransactionSearch
                customerName="0x33481f1383131"
                customerStatus="Paid"
                amountDue="3202"
                overdueAmount="3113"
                amount="3202"
                paymentStatus="Binance Chain"
                amountPaid="3113"
                overdueStatus="Rudimentaty"
                iconName="arrow-forward"
                iconSize="Rudimentaty"
                cardLink="/"
            />
            <TransactionList
                customerName="9x027373761011"
                customerStatus="Paid"
                amount={3202}
                paymentStatus="Ethereum"
                overdueAmount="3113"
                overdueStatus="Rudimentaty"
                iconName="arrow-forward"
                iconSize="Rudimentaty"
                cardLink="/tokens"
            />

        </CompoundLayout>
    )
}

// export async function getServerSideProps(ctx: NextPageContext) {
// Page.getInitialProps = async (ctx: NextPageContext) => {

//     if (Auth.redirectIfAuthenticated(ctx, '/')) {
//         return {};
//     }

//     return {}

// }