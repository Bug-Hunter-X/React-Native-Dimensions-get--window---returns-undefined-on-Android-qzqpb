# React Native Dimensions.get('window') returns undefined on Android

This repository demonstrates a common issue encountered when using the `Dimensions` API in React Native on Android: the API might return `undefined` during the initial render. This can lead to crashes or unexpected behavior in your app.

## Problem

The `Dimensions` API provides screen dimensions, but on Android, it might not be ready immediately. Attempting to use its values before they're available results in `undefined` being passed to your components.  This frequently causes a crash or unexpected behavior.

## Solution

The solution involves using the `useEffect` hook to handle the asynchronous nature of the `Dimensions` API. We use the `useState` hook to manage the dimensions, initially setting them to `null`, and updating them only when `Dimensions.get('window')` returns valid values.