// context/students-context.tsx

import React from "react";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { api } from "../services/api";
import { StudentsAction, StudentsState, studentsReducer } from "./students-reducer";

interface StudentsContextValue {
    students: StudentsState;
    dispatch: React.Dispatch<StudentsAction>;
    isLoading: boolean;
    error: string | null;
}

const StudentsContext = createContext<StudentsContextValue | null>(null);

export function StudentsProvider({ children }: { children: React.ReactNode }) {
    const [students, dispatch] = useReducer(studentsReducer, []);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Load student list from the server on mount
    useEffect(() => {
        api.get<StudentsState>("/students")
            .then(({ data }) => {
                dispatch({ type: "LOAD", payload: data });
            })
            .catch((err) => {
                setError("Could not load students. Is the server running?");
                console.error(err);
            })
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <StudentsContext.Provider value={{ students, dispatch, isLoading, error }}>
            {children}
        </StudentsContext.Provider>
    );
}

export function useStudents(): StudentsContextValue {
    const ctx = useContext(StudentsContext);
    if (!ctx) {
        throw new Error("useStudents must be used inside a StudentsProvider");
    }
    return ctx;
}
