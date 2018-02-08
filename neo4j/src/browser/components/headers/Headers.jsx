/*
 * Copyright (c) 2002-2017 "Neo4j, Inc,"
 * Network Engine for Objects in Lund AB [http://neotechnology.com]
 *
 * This file is part of Neo4j.
 *
 * Neo4j is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import styled from 'styled-components'

export const H3 = styled.h3`
  font-weight: 500;
  font-size: 24px;
  font-family: ${props => props.theme.primaryFontFamily};
  color: ${props => props.theme.headerText};
`
export const H2 = props => {
  return <h2 {...props} />
}
export const H1 = props => {
  return <h1 {...props} />
}
export const H4 = props => {
  return <h4 {...props} />
}
export const H5 = props => {
  return <h5 {...props} />
}
