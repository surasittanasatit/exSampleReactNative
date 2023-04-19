import React, { useState } from 'react'
import { TouchableHighlight } from 'react-native'
import { LineButtonSVG } from './LineButtonSVG'
import { styles } from './styles'
import Color from './Color'

const componentFeedback = (
    buttonPressed,
    disabled,
    feedbackColor,
) =>
    disabled
        ? feedbackColor.disabled
        : buttonPressed
            ? feedbackColor.press
            : feedbackColor.base

export const LineButton = ({ title, onPress, disabled = false }) => {

    const [buttonPressed, setButtonPressed] = useState(false)

    const backgroundColor = componentFeedback(buttonPressed, disabled, {
        disabled: Color.Grey2,
        press: Color.Green2,
        base: Color.PrimaryGreen,
    })
    const separatorColor = componentFeedback(buttonPressed, disabled, {
        disabled: Color.Grey1,
        press: Color.Green1,
        base: Color.Green2,
    })

    const onHideUnderlay = () => setButtonPressed(false)
    const onShowUnderlay = () => setButtonPressed(true)
    const onPressTouchable = () => !disabled && onPress()

    return (
        <TouchableHighlight
            onPress={onPressTouchable}
            onHideUnderlay={onHideUnderlay}
            onShowUnderlay={onShowUnderlay}
            style={styles.container}>
            <LineButtonSVG
                title={title}
                backgroundColor={backgroundColor}
                separatorColor={separatorColor}
            />
        </TouchableHighlight>
    )
}
