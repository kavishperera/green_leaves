/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.green_leaves.v1.green_leaves.tea_issue;

import com.mac.green_leaves.v1.green_leaves.tea_issue.model.TTeaIssueDetail;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author hjcha
 */
public interface TeaIssueDetailRepository extends JpaRepository<TTeaIssueDetail, Integer> {

}
