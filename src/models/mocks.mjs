import moment from "moment";

import { SESSION_COOKIE_NAME } from "../routes/v1/sessions/constants";

export const AssetMock = [
  "Asset",
  {
    assetId: "b96e846e-952a-47ed-b253-3232523b24ea",
    shoppingCentreId: "15664aa8-fe3d-4d12-9f97-4e661bf9bb7a",
    name: "Test Asset",
    dimensions: "400cm x 400cm",
    location: "Level 2 Kiosk",
    active: true,
  },
];

export const MOCK_SESSION_TOKEN =
  "rxLTOmxEjUgf3PIhBwtrn14X/OliHfjEnTyQIa/ZAglRi/izZxvPU/ccSmJrqrV9RtmdOvO8REUzWwSPjlaq6WfO7VoPjf5LvAEWuRjp+MpUZfoSCkfKcOOw2Nu6fH0qeB6hDTfTToQa+qpzLiVcJAffkHxZNGMgqtVaLuYfhHE=";

export const MOCK_SESSION_COOKIE = `${SESSION_COOKIE_NAME}=${MOCK_SESSION_TOKEN}`;

export const SessionMock = [
  "Session",
  {
    token: MOCK_SESSION_TOKEN,
    userId: "1e9ef21b-9fac-46ee-b741-21fec63841d8",
    expiredAt: moment()
      .add(1, "day")
      .toDate(),
  },
];

export const ShoppingCentreMock = [
  "ShoppingCentre",
  {
    shoppingCentreId: "15664aa8-fe3d-4d12-9f97-4e661bf9bb7a",
    name: "Westfield Miranda",
    address: "45 Miranda Road, Miranda",
  },
];
