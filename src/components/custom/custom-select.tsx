import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

// prop type
interface SelectOptionsProps {
    placeholderText: string
}

export function CustomSelect({ placeholderText }: SelectOptionsProps) {
    return (
        <Select>
            <SelectTrigger className="w-[100px]">
                <SelectValue placeholder={placeholderText} />
            </SelectTrigger>
            <SelectContent className="w-[100px]">
                <SelectGroup>
                    <SelectItem value="chapter1">Chapter 1</SelectItem>
                    <SelectItem value="chapter2">Chapter 2</SelectItem>
                    <SelectItem value="chapter3">Chapter 3</SelectItem>
                    <SelectItem value="chapter4">Chapter 4</SelectItem>
                    <SelectItem value="chapter5">Chapter 5</SelectItem>
                    <SelectItem value="chapter6">Chapter 6</SelectItem>
                    <SelectItem value="chapter7">Chapter 7</SelectItem>
                    <SelectItem value="chapter8">Chapter 8</SelectItem>
                    <SelectItem value="chapter9">Chapter 9</SelectItem>
                    <SelectItem value="chapter10">Chapter 10</SelectItem>
                    <SelectItem value="chapter11">Chapter 11</SelectItem>
                    <SelectItem value="chapter12">Chapter 12</SelectItem>
                    <SelectItem value="chapter13">Chapter 13</SelectItem>
                    <SelectItem value="chapter14">Chapter 14</SelectItem>
                    <SelectItem value="chapter15">Chapter 15</SelectItem>
                    <SelectItem value="chapter16">Chapter 16</SelectItem>
                    <SelectItem value="chapter17">Chapter 17</SelectItem>
                    <SelectItem value="chapter18">Chapter 18</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}