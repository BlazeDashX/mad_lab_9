// components/skeleton-loader.tsx
// Graded Feature 1: Skeleton Loading (4 marks)
// 6 grey placeholder rows shaped like StudentItem, animated with Animated.loop/sequence

import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

export function SkeletonItem() {
    const opacity = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const animation = Animated.loop(
            Animated.sequence([
                Animated.timing(opacity, {
                    toValue: 0.3,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ])
        );
        animation.start();

        return () => animation.stop();
    }, [opacity]);

    return (
        <Animated.View style={[styles.row, { opacity }]}>
            {/* Avatar placeholder */}
            <View style={styles.avatar} />

            {/* Info placeholder */}
            <View style={styles.info}>
                <View style={styles.nameLine} />
                <View style={styles.deptLine} />
                <View style={styles.idLine} />
            </View>
        </Animated.View>
    );
}

export default function SkeletonLoader() {
    return (
        <View style={styles.container}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
                <SkeletonItem key={item} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: "#FFFFFF",
        borderBottomWidth: 1,
        borderBottomColor: "#F1F5F9",
    },
    avatar: {
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: "#E2E8F0",
        marginRight: 14,
    },
    info: {
        flex: 1,
        justifyContent: "center",
    },
    nameLine: {
        width: "55%",
        height: 14,
        borderRadius: 4,
        backgroundColor: "#CBD5E1",
        marginBottom: 8,
    },
    deptLine: {
        width: "38%",
        height: 11,
        borderRadius: 4,
        backgroundColor: "#E2E8F0",
        marginBottom: 6,
    },
    idLine: {
        width: "25%",
        height: 10,
        borderRadius: 4,
        backgroundColor: "#E2E8F0",
    },
});
