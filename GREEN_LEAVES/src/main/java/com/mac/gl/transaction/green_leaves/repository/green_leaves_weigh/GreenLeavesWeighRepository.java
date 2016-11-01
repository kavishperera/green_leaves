/*
 *  GreenLeavesWeighRepository.java
 *  
 *  @author Channa Mohan
 *     hjchanna@gmail.com
 *  
 *  Created on Oct 20, 2016, 10:56:57 AM
 *  All rights reserved.
 *  Copyrights supervision technology (pvt.) ltd.
 *  
 */
package com.mac.gl.transaction.green_leaves.repository.green_leaves_weigh;

import com.mac.gl.transaction.green_leaves.model.green_leaves_weigh.TGreenLeaveWeigh;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author Mohan
 */
public interface GreenLeavesWeighRepository extends JpaRepository<TGreenLeaveWeigh, Integer> {

    public List<TGreenLeaveWeigh> findByBranchAndNumber(Integer branch, Integer number);

    @Query(value = "SELECT MAX(number) FROM t_green_leave_weigh WHERE branch=:branch", nativeQuery = true)
    public int getMaximumNumberByBranch(@Param("branch") Integer branch);
}
