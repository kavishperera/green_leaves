/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.green_leaves.v1.security;

import com.mac.green_leaves.v1.security.model.MBranch;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author hjcha
 */
public interface SEBranchRepository extends JpaRepository<MBranch, Integer> {

}
