/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { AddressAutofill as Raw } from "@mapbox/search-js-react";

// Cast to `any` → TS 5 stops complaining, runtime unaffected
export const AddressAutofill = Raw as unknown as React.FC<any>;
