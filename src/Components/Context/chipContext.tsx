import React from 'react'

type ChipContextProps = {
    chips: string[],
    setChips: React.Dispatch<React.SetStateAction<string[]>>
}

const InitialValues:ChipContextProps = {
    chips: [],
    setChips: () => undefined
}

const ChipContext = React.createContext<ChipContextProps>(InitialValues)

export const ChipProvidor = ({
    children
}:{children: React.ReactNode | JSX.Element}) => {
    const [chips, setChips] = React.useState(InitialValues.chips)

    const values = {
        chips,
        setChips
    }

    return <ChipContext.Provider value={values}>{children}</ChipContext.Provider>
}

export const useChips = () => {
    const {...state} = React.useContext(ChipContext)
    return {...state}
}

export default ChipProvidor